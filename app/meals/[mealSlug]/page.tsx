export default async function Meals({ params }: { params: Promise<{ mealSlug: string }> }) {
  const { mealSlug } = await params;

  return (
    <main>
      <h1 className="text-center text-3xl font-bold text-white">{mealSlug} Meals Page</h1>
    </main>
  );
}
