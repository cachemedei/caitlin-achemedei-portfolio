const Contact = () => {
    const style = {
        contactPage: 'min-h-screen w-[75%] pt-[20px] mx-auto flex-col md:w-[70%] lg:w-[40%]',
        title: 'text-[28px] text-[#1c451c] md:text-[30px] md:mb-[40px]',
        form: 'h-[450px] flex flex-col justify-evenly mx-auto w-fit',
        container: 'flex flex-col md:flex-row md:justify-between md:text-[20px] md:gap-[40px]',
        input: 'mt-[5px] rounded p-[5px] w-[270px] md:w-[320px]',
        button: 'border-[1px] border-[#6c976c] rounded py-[5px] px-[12px] md:text-[20px] md:px-[10px] hover:scale-110 duration-500',
    };
    return (
        <section className={style.contactPage}>
            <h1 className={style.title}>Contact</h1>
            <form className={style.form}>
                <div className={style.container}>
                    <label htmlFor='name'>Name</label>
                    <input className={style.input} type='text' id='name' />
                </div>
                <div className={style.container}>
                    <label htmlFor='email'>Email</label>
                    <input className={style.input} type='email' id='email' />
                </div>
                <div className={style.container}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        className={style.input}
                        type='text'
                        rows='6'
                        id='message'
                    />
                </div>
                <div className="mx-auto">
                    <button type='submit' className={style.button}>
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
};
export default Contact;
