import Link from "next/link";
import { Button } from "@/components/ui/button";
export default async function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg mb-8">
        Você chegou ao fim da Galáxia! Tente voltar e tente novamente...
      </p>
      <Link href="/">
        <Button size="xl" className="font-bold text-lg">
          Voltar para a página inicial
        </Button>
      </Link>
    </div>
  );
}
