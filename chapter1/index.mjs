import { statement } from "./statement.mjs";
import * as invoices from "./invoices.json";
import * as plays from "./plays.json";

const invoices_data = JSON.parse(JSON.stringify(invoices.default));
const plays_data = JSON.parse(JSON.stringify(plays.default));

invoices_data.forEach(invoice => {
    console.log(statement(invoice,plays_data));    
});

