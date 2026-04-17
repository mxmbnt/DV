import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { nom, email, telephone, typeProjet, budget, description } = await req.json()

  // Validation basique
  if (!nom || !email || !typeProjet || !budget || !description) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // SSL sur le port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const projectLabels: Record<string, string> = {
    landing: 'Landing Page',
    vitrine: 'Site Vitrine',
    ecommerce: 'Site E-commerce',
    refonte: 'Refonte de site',
    autre: 'Autre projet',
  }

  const budgetLabels: Record<string, string> = {
    '1000-2000': '1 000€ - 2 000€',
    '2000-5000': '2 000€ - 5 000€',
    '5000-10000': '5 000€ - 10 000€',
    '10000+': 'Plus de 10 000€',
  }

  try {
    // Email reçu par Digital Vision
    await transporter.sendMail({
      from: `"Digital Vision" <contact@digital-vision.fr>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Nouvelle demande — ${projectLabels[typeProjet] ?? typeProjet} · ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2A00FF; padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle demande de contact</h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 14px; width: 140px;">Nom</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${nom}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #2A00FF;">${email}</a>
                </td>
              </tr>
              ${telephone ? `
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Téléphone</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${telephone}</td>
              </tr>` : ''}
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Type de projet</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${projectLabels[typeProjet] ?? typeProjet}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Budget</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${budgetLabels[budget] ?? budget}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top;">Description</td>
                <td style="padding: 10px 0; color: #111; font-size: 14px; white-space: pre-line;">${description}</td>
              </tr>
            </table>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin-top: 20px;">
            Digital Vision · contact@digital-vision.fr
          </p>
        </div>
      `,
    })

    // Email de confirmation envoyé au client
    await transporter.sendMail({
      from: `"Digital Vision" <contact@digital-vision.fr>`,
      to: email,
      subject: 'Nous avons bien reçu votre demande ✓',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #171717; padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Merci ${nom} !</h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 16px 16px; border: 1px solid #e5e5e5; border-top: none;">
            <p style="color: #444; font-size: 16px; line-height: 1.6; margin: 0 0 16px;">
              Nous avons bien reçu votre demande concernant un <strong>${projectLabels[typeProjet] ?? typeProjet}</strong>.
            </p>
            <p style="color: #444; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
              Notre équipe reviendra vers vous dans les plus brefs délais — en général sous 24h ouvrées.
            </p>
            <p style="color: #888; font-size: 14px; margin: 0;">
              À très bientôt,<br/>
              <strong style="color: #111;">L'équipe Digital Vision</strong>
            </p>
          </div>
          <p style="color: #aaa; font-size: 12px; text-align: center; margin-top: 20px;">
            Digital Vision · contact@digital-vision.fr
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Erreur envoi email:', err)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi. Réessayez.' }, { status: 500 })
  }
}
