type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export default function StructuredData({ data }: StructuredDataProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          type="application/ld+json"
          key={`structured-data-${index}`}
        />
      ))}
    </>
  );
}
