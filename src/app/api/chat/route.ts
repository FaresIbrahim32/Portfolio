import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { RESUME_CONTEXT } from '@/lib/resume-context'


const SYSTEM_PROMPT = `You are a helpful assistant on Fares Ibrahim's personal portfolio website. You answer questions about Fares based strictly on his resume below. Be concise, friendly, and professional. If asked something not covered in the resume, say you don't have that information but visitors can reach out via faresibrahim@usf.edu.

${RESUME_CONTEXT}`

// Ordered list of free models to try — falls back if one is rate-limited
const MODELS = [
  'meta-llama/llama-3.3-70b-instruct:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
]

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'https://faresibrahim.me',
      'X-Title': 'Fares Ibrahim Portfolio',
    },
  })

  const { messages } = await req.json()

  for (const model of MODELS) {
    try {
      const completion = await client.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 512,
      })
      const reply = completion.choices[0]?.message?.content ?? 'Sorry, I could not generate a response.'
      return NextResponse.json({ reply })
    } catch (err: unknown) {
      const status = (err as { status?: number }).status
      // Retry on rate-limit, provider errors, or unavailable model
      if (status === 429 || status === 404 || status === 400) continue
      throw err
    }
  }

  return NextResponse.json(
    { reply: "I'm temporarily unavailable due to high demand. Please try again in a moment." },
    { status: 503 }
  )
}
