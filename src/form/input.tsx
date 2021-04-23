import { useField } from "formik"
import { Input } from "semantic-ui-react"

export interface InputProps extends React.ComponentProps<typeof Input> {
    name: string
}

function FormikInput({ name, ...props }: InputProps) {
    const [field,,helpers] = useField(name)

    return <Input value={field.value.value} onChange={(e,v) => helpers.setValue(v.value)} {...props}>
        <input onBlur={() => helpers.setTouched(true)} />
    </Input>
}

export default FormikInput
