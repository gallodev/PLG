import { AccordionDetail } from '../components/Accordion/Detail/AccordionDetail';

const formatData = (data : any): JSX.Element[] => {
    let formatedData: Array<JSX.Element> = [];
    
    if(Array.isArray(data)) {
        data.map((rocket: any) => {
            formatedData.push(<AccordionDetail rocket={rocket}/>)
        });
    } else {
        formatedData.push(<AccordionDetail rocket={data}/>);         
    }

    return formatedData;
}


export { formatData };