import { addTeste } from "@/app/lib/action";
import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';


export function FormColaborador({title}) {
    return (
     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
        <Typography variant="h4" sx={{ marginBottom: 2}}>
            {title}
        </Typography>

        <form action={addTeste}>

            <TextField name="nome" 
            label="Nome" 
            fullWidth
            required  
            variant="filled" 
            sx={{marginBottom: 2}} />

            <TextField 
             name="email" 
             label="Email"
             fullWidth 
             required  
             variant="filled"
             sx={{marginBottom: 2}} 

             />

            <Button variant="contained" type="submit" fullWidth>
                Cadastrar
            </Button>

        </form>
    </Box>

    );
}
