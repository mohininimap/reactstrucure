
// Form components
import Dates from "./Dates";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";
import SelectWithApi from "./SelectApiCall";
import Upload from "./Upload";
import AsyncSelectCall from "./AsyncSelectCall.js";
import MultipleEmail from "./MultipleEmail";


const FormikControl = (props) => {
    const {control, ...rest} = props
    
    switch (control) {
        case 'input': return <Input {...rest} />

        case 'textarea': return <TextArea {...rest} />

        case 'select': return <Select {...rest} />

        case 'selectWithApi': return <SelectWithApi {...rest} />

        case 'asyncSelectCall': return <AsyncSelectCall {...rest} />

        case 'upload': return <Upload {...rest} />

        case 'radio': return <Radio {...rest} />

        case 'multipleEmail': return <MultipleEmail {...rest} />

        case 'checkbox':
        
            break;

        case 'date': return <Dates {...rest} />

        default:
            return null
    }
}

export default FormikControl


