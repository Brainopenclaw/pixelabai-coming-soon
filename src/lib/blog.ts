export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  author: string;
  tags: string[];
  cta: { text: string; href: string };
  faqs: BlogFaq[];
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-usar-chatgpt-para-tu-negocio",
    title: "Cómo usar ChatGPT para tu negocio: Guía práctica 2026",
    description: "Aprende paso a paso cómo configurar y usar ChatGPT para mejorar tu negocio. Prompts, casos de uso reales y errores comunes.",
    date: "2026-02-23",
    image: "/images/blog/chatgpt-negocios.svg",
    imageAlt: "ChatGPT para negocios",
    author: "Jorge De Armas",
    tags: ["ChatGPT", "IA para negocios", "productividad", "guía"],
    cta: { text: "Descarga la guía completa", href: "#form" },
    faqs: [
      { question: "¿ChatGPT es gratis para usar en mi negocio?", answer: "Sí, tiene plan gratuito con GPT-3.5. ChatGPT Plus cuesta $20/mes para funciones avanzadas." },
      { question: "¿Qué tipo de negocios se benefician?", answer: "Prácticamente cualquier negocio: tiendas online, restaurantes, consultorías y agencias." },
      { question: "¿Es seguro compartir información empresarial?", answer: "OpenAI permite desactivar entrenamiento con tus datos. Para info sensible, usa ChatGPT Enterprise." },
      { question: "¿Cuánto tiempo toma aprender?", answer: "Las bases en 1-2 horas. Prompting avanzado en 2-4 semanas." },
      { question: "¿Puede reemplazar empleados?", answer: "No reemplaza, potencia. Amplifica las capacidades de tu equipo." },
    ],
    content: `Si todavía no estás usando **ChatGPT** en tu negocio, estás dejando dinero sobre la mesa.

## 1. Configuración inicial (5 minutos)

1. Ve a [chat.openai.com](https://chat.openai.com)
2. Regístrate con tu email o cuenta de Google
3. Elige el plan gratuito para empezar
4. Configura tu perfil: indica tu industria y tipo de negocio

**Pro tip:** En Personalización, describe tu negocio para mejor contexto en todas las conversaciones.

## 2. Los prompts que realmente funcionan

**Fórmula:** Contexto + Tarea + Formato + Restricciones

### Ejemplo para atención al cliente:

> *"Eres el asistente de una tienda de ropa online para mujeres de 25-40 años. Redacta 5 respuestas para Mi pedido no ha llegado. Tono: amable pero profesional. Máximo 3 oraciones."*

### Ejemplo para marketing:

> *"Actúa como copywriter de redes sociales. Escribe 10 ideas de posts para Instagram sobre café artesanal. Formato: hook + desarrollo + CTA."*

## 3. Casos de uso con más impacto

### Contenido y marketing
- Posts para redes sociales (ahorra 3-5 horas/semana)
- Emails de seguimiento personalizados
- Descripciones de productos optimizadas para SEO

### Atención al cliente
- Plantillas de respuesta para preguntas frecuentes
- Scripts para chatbots
- Respuestas a reseñas negativas

### Operaciones
- Resúmenes de reuniones
- Análisis de datos y reportes
- Traducción de documentos

## 4. Limitaciones que debes conocer

- **Puede inventar datos** — Siempre verifica estadísticas
- **No tiene información en tiempo real**
- **No reemplaza expertise** — Es un asistente
- **Calidad = Calidad del prompt**

## 5. Tu plan de acción para esta semana

1. **Lunes:** Crea tu cuenta y configura tu perfil
2. **Martes:** Genera 5 posts para redes con la fórmula
3. **Miércoles:** Crea plantillas de respuesta para tus 3 preguntas más comunes
4. **Jueves:** Genera un email de seguimiento para clientes inactivos
5. **Viernes:** Evalúa resultados y ajusta tus prompts

---

**¿Quieres 50+ prompts listos para copiar y pegar?** Descárgalos gratis aquí abajo 👇`,
  },
  {
    slug: "herramientas-ia-gratis-emprendedores",
    title: "5 herramientas de IA gratis que todo emprendedor debería conocer",
    description: "Descubre las mejores herramientas de IA gratuitas: ChatGPT, Canva AI, Gamma, Claude y Perplexity.",
    date: "2026-02-20",
    image: "/images/blog/herramientas-ia-gratis.svg",
    imageAlt: "5 herramientas de IA gratis",
    author: "Jorge De Armas",
    tags: ["herramientas IA", "gratis", "emprendedores", "productividad"],
    cta: { text: "Síguenos en TikTok", href: "https://tiktok.com/@pixelabai" },
    faqs: [
      { question: "¿Son realmente gratis?", answer: "Sí, todas tienen planes gratuitos funcionales." },
      { question: "¿Cuál es la mejor para empezar?", answer: "ChatGPT por su versatilidad. Luego Canva AI y Perplexity." },
      { question: "¿Funcionan en español?", answer: "Sí, todas funcionan perfectamente en español." },
    ],
    content: `No necesitas gastar miles en software. Estas **5 herramientas gratuitas** te dan superpoderes.

## 1. ChatGPT — Tu asistente todoterreno

**Qué hace:** Genera texto, responde preguntas, analiza datos.

**Plan gratuito:** GPT-3.5 ilimitado, GPT-4o limitado, análisis de imágenes.

> 💡 *Configura instrucciones personalizadas con tu contexto de negocio.*

---

## 2. Canva AI — Diseño sin ser diseñador

**Qué hace:** Crea imágenes, presentaciones, videos con IA.

**Plan gratuito:** Magic Design, Magic Write, miles de plantillas.

> 💡 *Usa Brand Kit para consistencia visual.*

---

## 3. Gamma — Presentaciones que impresionan

**Qué hace:** Crea presentaciones y documentos desde texto.

**Plan gratuito:** Generación ilimitada, exportación PDF, temas profesionales.

> 💡 *Combínalo con ChatGPT para contenido + diseño.*

---

## 4. Claude — El pensador profundo

**Qué hace:** Análisis profundo, textos largos, razonamiento avanzado.

**Plan gratuito:** Claude 3.5 Sonnet, 200K tokens, subida de archivos.

> 💡 *Especialmente bueno para instrucciones complejas.*

---

## 5. Perplexity — Investigación con fuentes

**Qué hace:** Busca y sintetiza información con citas verificables.

**Plan gratuito:** Búsquedas ilimitadas, 5 Pro/día, citas con enlaces.

> 💡 *Usa Focus para filtrar por tipo de fuente.*

---

**Recomendación:** Empieza con ChatGPT + Canva AI esta semana.

**¿Quieres verlas en acción?** Síguenos en TikTok 🎬`,
  },
  {
    slug: "error-emprendedores-ia",
    title: "El error #1 que cometen los emprendedores con la IA",
    description: "Descubre por qué la mayoría obtiene resultados mediocres con IA y cómo solucionarlo.",
    date: "2026-02-17",
    image: "/images/blog/error-emprendedores-ia.svg",
    imageAlt: "Error común con IA",
    author: "Jorge De Armas",
    tags: ["IA", "errores comunes", "prompting", "emprendedores"],
    cta: { text: "Descarga la guía completa", href: "#form" },
    faqs: [
      { question: "¿Qué es el contexto en IA?", answer: "La información sobre quién eres, qué haces, para quién es el resultado y qué formato esperas." },
      { question: "¿Cuánto contexto debo dar?", answer: "Incluye: industria, cliente, tono, ejemplos y restricciones. 50-200 palabras." },
      { question: "¿Por qué da respuestas genéricas?", answer: "Porque le haces preguntas genéricas. Prompt vago = respuesta vaga." },
    ],
    content: `"Probé ChatGPT y no me sirvió."

Escucho esto **cada semana**. El problema no es la IA. **El problema eres tú.** La solución es simple.

## El error: usar IA sin contexto

Imagina contratar un empleado y decirle "Haz un post" sin explicar nada. ¿Esperarías algo increíble? **Obviamente no.**

## La diferencia es brutal

### ❌ Sin contexto (lo que hace el 90%):
> *"Escribe un post para Instagram"*

**Resultado:** Post genérico.

### ✅ Con contexto:
> *"Eres el community manager de una cafetería artesanal en Ciudad de México. Público: profesionales 28-40 años. Escribe caption sobre V60. Tono: cercano y educativo. Hook + 3 beneficios + CTA para este fin de semana. Máximo 2 emojis."*

**Resultado:** Post publicable directamente.

## La fórmula del contexto perfecto

### 1. 🎭 Rol
*"Eres un [rol] especializado en [área]"*

### 2. 🎯 Audiencia
*"Mi cliente ideal es [descripción]"*

### 3. 📝 Tarea específica
*"Necesito [qué] para [dónde/cuándo]"*

### 4. 🎨 Formato y tono
*"Formato: [tipo]. Tono: [estilo]"*

### 5. 🚫 Restricciones
*"Evita [x]. Máximo [y]. No uses [z]"*

## Por qué esto importa

La IA amplifica lo que le das:

- **Le das basura → basura** (pero más rápido)
- **Le das contexto → oro** (en segundos)

Los emprendedores que dominan el contexto **ahorran horas cada semana**.

## Tu siguiente paso

1. **Para.** No escribas lo primero que se te ocurra
2. **Define los 5 elementos**
3. **Escribe el prompt completo**
4. **Compara** el resultado con lo que habrías obtenido antes

---

**¿Quieres dominar el prompting?** Descarga nuestra guía gratuita aquí abajo 👇`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
