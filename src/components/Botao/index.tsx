import "./styles.css";
function Botao({ tipo, children }: { tipo: "button" | "submit" | "reset" | undefined, children: string }) {
    return <button type={tipo}>{children}</button>
}

export default Botao;