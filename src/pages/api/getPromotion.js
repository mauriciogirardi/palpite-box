import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../../credentials.json';

const doc = new GoogleSpreadsheet(
	'1P-etDZ4_zh5ucFKk0evtVPaqlHBXlqpQNbgg56Mu7wc'
);

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth(credentials);
		await doc.loadInfo();

		const sheet = doc.sheetsByIndex[2];
		await sheet.loadCells('A2:B2');

		const showPromotionCell = sheet.getCell(1, 0);
		const textCell = sheet.getCell(1, 1);

		res.end(
			JSON.stringify({
				showCoupon: showPromotionCell.value === 'VERDADEIRO',
				message: textCell.value,
			})
		);
	} catch (err) {
		res.end(
			JSON.stringify({
				showCoupon: false,
				message: '',
			})
		);
	}
};
