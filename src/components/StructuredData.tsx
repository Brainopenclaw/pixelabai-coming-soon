type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function StructuredData({ data }: StructuredDataProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          key={`json-ld-${index}`}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
