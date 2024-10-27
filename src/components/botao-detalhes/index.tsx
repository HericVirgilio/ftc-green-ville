import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function BotaoDetalhes() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-[#fff] bg-[#0078BC] border-[#0078BC]">Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]"
        style={{
          background: 'linear-gradient(90deg, #2D2D2D 0%, #262626 50%, #1C1C1D 100%)',
          border: "none"
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-[#fff]">#0004</DialogTitle>
          <DialogDescription className="text-[#C1C1C1]">
            17/06/2024
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid">
            <Label htmlFor="name" className="text-[#fff] text-base">
              Descrição
            </Label>
            <Textarea className="bg-[#fff] h-[100px]" placeholder="Type your message here." />
          </div>
          <div className="grid gap-4 py-4">
            <Label htmlFor="username" className="text-[#fff] text-base">
              Quantidade de produtos
            </Label>
            <Input
              id="username"
              defaultValue="1000"
              className="bg-[#fff]"
            />
          </div>
          <div className="grid gap-4 py-4">
            <Label htmlFor="username" className="text-[#fff] text-base">
              Valor do produto
            </Label>
            <Input
              id="username"
              defaultValue="R$464.99"
              className="bg-[#fff]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#0078BC] color-[#fff]">Salvar Alterações</Button>
          <Button type="submit" className="bg-[#88000A] color-[#fff]">Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
