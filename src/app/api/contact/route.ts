// # API Route pour l'envoi d'emails

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const formData = await req.json();

    // Configurer le transporteur d'email
    // Note: En production, utilisez des variables d'environnement pour ces informations
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
    });

    // Construire le contenu de l'email
    const emailContent = `
      <h2>Nouvelle demande de contact</h2>
      
      <h3>Informations personnelles</h3>
      <p><strong>Nom:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.phone}</p>
      ${formData.company ? `<p><strong>Société:</strong> ${formData.company}</p>` : ''}
      ${formData.availability ? `<p><strong>Date de disponibilité:</strong> ${formData.availability}</p>` : ''}
      
      <h3>Informations sur le service</h3>
      <p><strong>Type de service:</strong> ${
        formData.serviceType === 'gestion'
          ? 'Gestion locative'
          : formData.serviceType === 'conciergerie'
            ? 'Conciergerie'
            : formData.serviceType === 'both'
              ? 'Gestion locative et Conciergerie'
              : 'Non spécifié'
      }</p>
      
      <h3>Informations sur le bien</h3>
      ${formData.address ? `<p><strong>Adresse complète:</strong> ${formData.address}</p>` : ''}
      ${formData.city ? `<p><strong>Ville:</strong> ${formData.city}</p>` : ''}
      ${formData.postalCode ? `<p><strong>Code postal:</strong> ${formData.postalCode}</p>` : ''}
      ${formData.department ? `<p><strong>Département:</strong> ${formData.department}</p>` : ''}
      ${formData.propertyType ? `<p><strong>Type de bien:</strong> ${formData.propertyType}</p>` : ''}
      ${formData.surface ? `<p><strong>Surface:</strong> ${formData.surface} m²</p>` : ''}
      
      ${formData.message ? `<h3>Message</h3><p>${formData.message}</p>` : ''}
    `;

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@clesdalsace.fr',
      to: process.env.EMAIL_TO || 'contact@clesdalsace.fr',
      subject: 'Nouvelle demande de contact - Les Clés d’Alsace',
      html: emailContent,
      replyTo: formData.email,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Répondre avec succès
    return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
