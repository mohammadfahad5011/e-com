export default function Page({ params }: { params: { id: string } }) {
  return <div>product {params.id}</div>;
}
