import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Pixelab AI. Información sobre recopilación de datos, cookies y manejo de información personal.",
  alternates: {
    canonical: `${SITE_URL}/privacidad`,
  },
  openGraph: {
    title: "Política de Privacidad | Pixelab AI",
    description:
      "Política de privacidad de Pixelab AI. Información sobre recopilación de datos, cookies y manejo de información personal.",
    url: `${SITE_URL}/privacidad`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pixelab AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Pixelab AI",
    description:
      "Política de privacidad de Pixelab AI. Información sobre recopilación de datos, cookies y manejo de información personal.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrivacidadPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Política de Privacidad", path: "/privacidad" },
  ]);

  return (
    <main className="min-h-screen bg-background text-text py-20 px-6">
      <StructuredData data={[breadcrumbSchema]} />
      <article className="max-w-3xl mx-auto prose prose-invert prose-headings:text-text prose-p:text-text-muted prose-li:text-text-muted prose-strong:text-text">
        <h1 className="text-4xl font-bold text-primary mb-2">Política de Privacidad</h1>
        <p className="text-text-muted text-sm mb-10">
          Última actualización: febrero 2026
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. Información General</h2>
            <p className="text-text-muted leading-relaxed">
              En <strong className="text-text">Pixelab AI</strong> (pixelabai.com), operado por Jorge De Armas,
              nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos, usamos y
              protegemos tu información personal cuando utilizas nuestro sitio web y servicios.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Información que Recopilamos</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              Podemos recopilar la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text">Información proporcionada voluntariamente:</strong> nombre y
                dirección de correo electrónico cuando te suscribes a nuestra lista de espera, descargas
                recursos gratuitos o te registras en nuestros formularios.
              </li>
              <li>
                <strong className="text-text">Información de uso:</strong> datos anónimos sobre cómo
                interactúas con nuestro sitio (páginas visitadas, tiempo de permanencia, dispositivo utilizado).
              </li>
              <li>
                <strong className="text-text">Cookies:</strong> pequeños archivos de texto almacenados en tu
                navegador para mejorar tu experiencia en el sitio.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Uso de la Información</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              Utilizamos tu información para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>Enviarte contenido, recursos y actualizaciones sobre Pixelab AI.</li>
              <li>Notificarte sobre el lanzamiento de cursos y nuevos servicios.</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
              <li>Cumplir con obligaciones legales cuando sea necesario.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Email Marketing y Systeme.io</h2>
            <p className="text-text-muted leading-relaxed">
              Utilizamos <strong className="text-text">Systeme.io</strong> como plataforma de email marketing
              y gestión de embudos de venta. Cuando proporcionas tu correo electrónico a través de nuestros
              formularios, tu información se almacena y procesa en los servidores de Systeme.io. Puedes
              consultar su política de privacidad en{" "}
              <a
                href="https://systeme.io/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                systeme.io/privacy-policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              Nuestro sitio utiliza cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text">Cookies esenciales:</strong> necesarias para el funcionamiento
                básico del sitio.
              </li>
              <li>
                <strong className="text-text">Cookies analíticas:</strong> nos ayudan a entender cómo se
                utiliza el sitio para mejorarlo.
              </li>
              <li>
                <strong className="text-text">Cookies de marketing:</strong> utilizadas por herramientas de
                terceros (como Systeme.io) para personalizar tu experiencia.
              </li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-3">
              Puedes desactivar las cookies en la configuración de tu navegador, aunque esto podría afectar
              la funcionalidad del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Compartir Información con Terceros</h2>
            <p className="text-text-muted leading-relaxed">
              No vendemos ni compartimos tu información personal con terceros, excepto con los proveedores
              de servicios necesarios para operar nuestro negocio (como Systeme.io para email marketing y
              Vercel para el alojamiento del sitio). Estos proveedores están obligados a proteger tu
              información conforme a sus propias políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Tus Derechos</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Solicitar la corrección de datos inexactos.</li>
              <li>Solicitar la eliminación de tus datos personales.</li>
              <li>Cancelar tu suscripción en cualquier momento usando el enlace de baja en nuestros emails.</li>
              <li>Oponerte al procesamiento de tus datos para fines de marketing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Seguridad de los Datos</h2>
            <p className="text-text-muted leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
              personal contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de
              transmisión por internet es 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">9. Cambios en esta Política</h2>
            <p className="text-text-muted leading-relaxed">
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
              Los cambios se publicarán en esta página con la fecha de la última actualización.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">10. Contacto</h2>
            <p className="text-text-muted leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos,
              puedes contactarnos a través de nuestro sitio web o redes sociales.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
