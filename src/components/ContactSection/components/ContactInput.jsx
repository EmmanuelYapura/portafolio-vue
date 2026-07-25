export default function ContactInput({
    textarea = false,
    label,
    error,
    ...props
}) {

    return (
        <div className="form-group">
            <label htmlFor={props.id}>
                {label}
            </label>
            {
                textarea
                    ?
                    <textarea
                        {...props}
                        className={error ? "input-error" : ""}
                    />
                    :
                    <input
                        {...props}
                        className={error ? "input-error" : ""}
                    />
            }
            {
                error &&
                <span className="error-text">
                    {error}
                </span>
            }
        </div>
    );
}