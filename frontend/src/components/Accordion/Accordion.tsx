import { Typography, AccordionDetails, AccordionSummary, Accordion as MuiAccordion} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RocketListProps } from '../../types';
import { formatData } from '../../utils/utils';

export interface AccordionProps {
  rocketData: RocketListProps;
}

export type AccordionData = {
  title: string,
  data: any;
}

const Accordion: React.FC<AccordionProps> = ({ rocketData } : AccordionProps): JSX.Element => {
    const { upcoming,next,latest,past } = rocketData;

    const tableData: AccordionData[] = [
      {
        title: '🚀 Próximo lançamento',
        data: upcoming
      },
      {
        title: '🚀 Último lançamento',
        data: next
      },
      {
        title: '🚀 Próximos lançamentos',
        data: latest
      },
      {
        title: '🚀 Lançamentos passados',
        data: past
      },
    ];

    const getData = (): JSX.Element[] => {      
      const data: JSX.Element[] = tableData.map(({title,data}: AccordionData) => {
        const detailData = formatData(data);
        return (<MuiAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}                        
          >
            <Typography>{title}</Typography>
          </AccordionSummary> 
          <AccordionDetails>
            {detailData}
          </AccordionDetails>
        </MuiAccordion>);
      });      

      return data;
      
    };

    const data = getData();

    return(
      <div style={{marginTop: 50}}>
        {data}
      </div>
    )
};

export { Accordion };