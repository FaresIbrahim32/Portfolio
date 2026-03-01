'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const N = 90        // particle count
const BOX = 22      // half-size bounding box
const LINK = 9      // max connection distance

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // ─── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(70, el.clientWidth / el.clientHeight, 0.1, 1000)
    camera.position.z = 30

    // ─── Particles (positions + velocities) ───────────────────────────────
    const pPos = new Float32Array(N * 3)
    const pVel = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * BOX * 2
      pPos[i * 3 + 1] = (Math.random() - 0.5) * BOX * 2
      pPos[i * 3 + 2] = (Math.random() - 0.5) * BOX
      pVel[i * 3]     = (Math.random() - 0.5) * 0.028
      pVel[i * 3 + 1] = (Math.random() - 0.5) * 0.028
      pVel[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }

    const dotGeo = new THREE.BufferGeometry()
    const dotPosAttr = new THREE.BufferAttribute(pPos, 3)
    dotGeo.setAttribute('position', dotPosAttr)
    const dotMat = new THREE.PointsMaterial({
      size: 0.32,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
    scene.add(new THREE.Points(dotGeo, dotMat))

    // ─── Connection lines ──────────────────────────────────────────────────
    const MAX_SEGS = (N * (N - 1)) / 2
    const lPos = new Float32Array(MAX_SEGS * 6)
    const lCol = new Float32Array(MAX_SEGS * 6)
    const lineGeo = new THREE.BufferGeometry()
    const lPosAttr = new THREE.BufferAttribute(lPos, 3)
    const lColAttr = new THREE.BufferAttribute(lCol, 3)
    lineGeo.setAttribute('position', lPosAttr)
    lineGeo.setAttribute('color', lColAttr)
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    })
    scene.add(new THREE.LineSegments(lineGeo, lineMat))

    // ─── Background wireframe icosahedron ──────────────────────────────────
    const icoGeo = new THREE.IcosahedronGeometry(14, 1)
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    })
    const icosphere = new THREE.Mesh(icoGeo, icoMat)
    scene.add(icosphere)

    // ─── Floating accent torus ─────────────────────────────────────────────
    const torusGeo = new THREE.TorusGeometry(7, 0.02, 8, 100)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.12,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    torus.rotation.x = Math.PI / 4
    scene.add(torus)

    // ─── Mouse ─────────────────────────────────────────────────────────────
    const mouse = { x: 0, y: 0 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth - 0.5
      mouse.y = -(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ─── Animation ─────────────────────────────────────────────────────────
    const colA = new THREE.Color(0x3b82f6) // blue-500
    const colB = new THREE.Color(0x06b6d4) // cyan-500
    const clock = new THREE.Clock()
    let raf: number

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()

      // Move particles + bounce off bounding box
      for (let i = 0; i < N; i++) {
        pPos[i * 3]     += pVel[i * 3]
        pPos[i * 3 + 1] += pVel[i * 3 + 1]
        pPos[i * 3 + 2] += pVel[i * 3 + 2]
        if (Math.abs(pPos[i * 3])     > BOX)     pVel[i * 3]     *= -1
        if (Math.abs(pPos[i * 3 + 1]) > BOX)     pVel[i * 3 + 1] *= -1
        if (Math.abs(pPos[i * 3 + 2]) > BOX / 2) pVel[i * 3 + 2] *= -1
      }
      dotPosAttr.needsUpdate = true

      // Build connection segments between nearby particles
      let seg = 0
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pPos[i * 3]     - pPos[j * 3]
          const dy = pPos[i * 3 + 1] - pPos[j * 3 + 1]
          const dz = pPos[i * 3 + 2] - pPos[j * 3 + 2]
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.65
            const c = colA.clone().lerp(colB, d / LINK)
            const r = c.r * alpha, g = c.g * alpha, b = c.b * alpha

            lPos[seg * 6]     = pPos[i * 3];     lPos[seg * 6 + 1] = pPos[i * 3 + 1]; lPos[seg * 6 + 2] = pPos[i * 3 + 2]
            lPos[seg * 6 + 3] = pPos[j * 3];     lPos[seg * 6 + 4] = pPos[j * 3 + 1]; lPos[seg * 6 + 5] = pPos[j * 3 + 2]
            lCol[seg * 6]     = r; lCol[seg * 6 + 1] = g; lCol[seg * 6 + 2] = b
            lCol[seg * 6 + 3] = r; lCol[seg * 6 + 4] = g; lCol[seg * 6 + 5] = b
            seg++
          }
        }
      }
      lineGeo.setDrawRange(0, seg * 2)
      lPosAttr.needsUpdate = true
      lColAttr.needsUpdate = true

      // Rotate background elements
      icosphere.rotation.y = t * 0.055
      icosphere.rotation.x = t * 0.025
      torus.rotation.z = t * 0.035
      torus.rotation.y = t * 0.018

      // Smooth camera parallax following mouse
      camera.position.x += (mouse.x * 6 - camera.position.x) * 0.04
      camera.position.y += (mouse.y * 6 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      renderer.dispose()
      dotGeo.dispose(); dotMat.dispose()
      lineGeo.dispose(); lineMat.dispose()
      icoGeo.dispose(); icoMat.dispose()
      torusGeo.dispose(); torusMat.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}
