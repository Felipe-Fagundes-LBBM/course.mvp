import { addTeste } from "@/app/lib/action";

export function FormColaborador() {
    return (
        <form action={addTeste}>
            <div>
                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}
