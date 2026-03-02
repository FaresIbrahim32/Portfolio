import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { RESUME_CONTEXT } from '@/lib/resume-context'

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
})

const SYSTEM_PROMPT = `You are a helpful assistant on Fares Ibrahim's personal portfolio website. You answer questions about Fares based strictly on his resume below. Be concise, friendly, and professional. If asked something not covered in the resume, say you don't have that information but visitors can reach out via faresibrahim@usf.edu.

${RESUME_CONTEXT}`

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const { messages } = await req.json()

  const completion = await client.chat.completions.create({
    model: 'meta-llama/llama-3.3-70b-instruct:free',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ],
    max_tokens: 512,
  })

  const reply = completion.choices[0]?.message?.content ?? 'Sorry, I could not generate a response.'
  return NextResponse.json({ reply })
}
