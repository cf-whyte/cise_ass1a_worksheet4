import articles from '../dummydata/articles';
import Styles from '../components/TableStyle';
import Table from '../components/EvidenceTable';
import tablecolumns from '../components/TableColumns';
import Dropdown from "../components/Dropdown";

const SEPractice = () => {
	return (
		<div>
			<h2>Select SE Practice to get evidence for the claimed benefits</h2>
			<Dropdown/>
      <Styles>
				<Table data={articles} columns={tablecolumns} />
			</Styles>
		</div>
	);
};

export default SEPractice;
