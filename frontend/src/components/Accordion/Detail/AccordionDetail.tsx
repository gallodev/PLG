import styled from 'styled-components';

export interface AccordionDetailProps {
    rocket: any;
}

export interface DetailItemProps {
    label: string;
    value: string;
    isImage?: boolean;
    isLink?: boolean;
}

export const Detail = styled.div`
    & ul > li {
        list-style: none;
        margin: 15px auto;                
        text-align: center;
        &:last-child {
            position: relative;
            margin-bottom: 40px;
            padding-bottom:40px;
            border-bottom: 1px solid #ccc;
        }
        span {
            max-width: 500px;
        }
    }
`

const AccordionItem: React.FC<DetailItemProps> = ({ value, label, isImage, isLink }: DetailItemProps): JSX.Element => {
    let formatedValue: any = <span><strong>{label}</strong> : {value}</span>;
    if(isImage) {
        formatedValue = <div><img src={value} width={120} height={120} /></div>;
    }

    if(isLink) {
        formatedValue = <span><a href={value} target="_blank"> + Detalhes</a></span>;
    }    

    if(value)
        return (
         <li>
             {formatedValue}
         </li>
        )
    return <></>
};

const AccordionDetail: React.FC<AccordionDetailProps> = ({ rocket } : AccordionDetailProps): any  => {        
    const srcDetail = rocket.links.wikipedia ||rocket.links.presskit || rocket.links.reddit.campaign;
    return (
        <Detail>
            <ul>
                <AccordionItem value={rocket.name} label="Foguete"/>
                <AccordionItem value={rocket.date_local} label="Data"/>
                <AccordionItem value={rocket.details} label="Detalhes"/>
                <AccordionItem value={rocket.links.patch.large} label="Emblema" isImage/>
                <AccordionItem value={srcDetail} label="+ detalhes" isLink/>
            </ul>
        </Detail>);
};

export { AccordionDetail };