import { useForm } from "react-hook-form";
import { useState } from "react";
import styler from "./Forms.module.css";

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [responseMessage, setResponseMessage] = useState(null); // <- Aqui vamos guardar a resposta

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3080/clients", { // URL do backend
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json(); // Pega o JSON

            if (response.ok) {
                setResponseMessage(result.message); // Mostra mensagem de sucesso
                reset(); // Limpa o formulário
            } else {
                setResponseMessage(`Erro: ${result.error}`);
            }

        } catch (error) {
            setResponseMessage(`Erro na conexão: ${error.message}`);
        }
    };

    return (
        <div className={styler.form}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Primeira linha */}
                <div className={styler.formRow}>
                    <div className={styler.formGroup}>
                        <label>Razão Social</label>
                        <input {...register("razaoSocial", { required: true })} />
                        {errors.razaoSocial && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>

                    <div className={styler.formGroup}>
                        <label>CPF ou CNPJ</label>
                        <input {...register("cpfCnpj", { required: true })} />
                        {errors.cpfCnpj && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>

                    <div className={styler.formGroup}>
                        <label>Nome Completo</label>
                        <input {...register("nome", { required: true })} />
                        {errors.nome && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>
                </div>

                {/* Segunda linha */}
                <div className={styler.formRow2}>
                    <div className={styler.formGroup}>
                        <label>Cidade</label>
                        <input {...register("cidade", { required: true })} />
                        {errors.cidade && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>

                    <div className={styler.formGroup}>
                        <label>Email</label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>

                    <div className={styler.formGroup}>
                        <label>Telefone</label>
                        <input type="tel" {...register("telefone", { required: true })} />
                        {errors.telefone && <p className={styler.errorText}>Campo obrigatório</p>}
                    </div>
                </div>

                {/* Mensagem */}
                <div className={styler.formGroupMessage}>
                    <label>Mensagem</label>
                    <textarea {...register("mensagem", { required: true })}></textarea>
                    {errors.mensagem && <p className={styler.errorText}>Campo obrigatório</p>}
                </div>

                <button type="submit" className={styler.submitButton}>Enviar</button>
            </form>

            {/* Aqui mostramos a resposta */}
            {responseMessage && (
                <div className={styler.responseMessage}>
                    <p>{responseMessage}</p>
                </div>
            )}
        </div>
    );
}
