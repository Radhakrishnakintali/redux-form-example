const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div className="control">
        <label className="field">{label}</label>
        <input className="input" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span className="reqColor">{error}</span>) || (warning && <span className="reqColor">{warning}</span>))}
      </div>
    </div>
  )

export default renderField;