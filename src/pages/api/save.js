import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../../credentials.json';
import moment from 'moment';

const doc = new GoogleSpreadsheet(
	'1P-etDZ4_zh5ucFKk0evtVPaqlHBXlqpQNbgg56Mu7wc'
);

const genCupom = () => {
	const codeCupom = parseInt(moment().format('DDMMYYYYHHmmssSSS'))
		.toString(16)
		.toUpperCase();
	return (
		codeCupom.substr(0, 4) +
		'-' +
		codeCupom.substr(4, 4) +
		'-' +
		codeCupom.substr(8, 5)
	);
};

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth(credentials);
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[1];
		const data = JSON.parse(req.body);

		const sheetConfig = doc.sheetsByIndex[2];
		await sheetConfig.loadCells('A2:B2');
		const showPromotionCell = sheetConfig.getCell(1, 0);
		const textCell = sheetConfig.getCell(1, 1);

		let Cupom = '';
		let Promocao = '';

		if (showPromotionCell.value === 'VERDADEIRO') {
			Cupom = genCupom();
			Promocao = textCell.value;
		}

		await sheet.addRow({
			Nome: data.Nome,
			Email: data.Email,
			Whatsapp: data.Whatsapp,
			Cupom,
			Promocao,
			Data: moment().format('DD/MM/YYYY'),
			Nota: 5,
		});
		res.end(req.boby);
	} catch (err) {
		res.end('error');
	}
};
