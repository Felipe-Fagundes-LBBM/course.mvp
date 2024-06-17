import { addTeste } from "@/app/lib/action";
import TextField from '@mui/material/TextField';

export function FormColaborador() {
    return (
        <form action={addTeste}>
            <TextField name="nome" label="Nome" fullWidth required  variant="filled"/>
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
