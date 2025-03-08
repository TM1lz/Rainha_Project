import styler from "./Forms.module.css";
import { useForm } from "react-hook-form";

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Formulário enviado com sucesso!");
    };

    return (
        <div className={styler.form}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Primeira linha (Razão Social, CPF/CNPJ, Nome) */}
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

                {/* Segunda linha (Cidade, Email, Telefone) */}
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

                {/* Linha com Mensagem */}
                <div className={styler.formGroupMessage}>
                    <label>Mensagem</label>
                    <textarea {...register("mensagem", { required: true })}></textarea>
                    {errors.mensagem && <p className={styler.errorText}>Campo obrigatório</p>}
                </div>

                <button type="submit" className={styler.submitButton}>Enviar</button>
            </form>
        </div>
    );
}
