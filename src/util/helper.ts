export class DateFormat {

    ConvertirTime(fecha: string): Number {
        console.log("fecha a convertir: ", fecha);
        let fechaevento: Date;
        let arraDate: Array<any> = fecha.split("/");
        if (arraDate.length === 3) {
            console.log(arraDate);
            fechaevento = new Date(Number(arraDate[2]), Number(arraDate[1]) - 1, Number(arraDate[0]));
        } else {
            arraDate = fecha.split("-");
            console.log(arraDate);
            fechaevento = new Date(Number(arraDate[0]), Number(arraDate[1]) - 1, Number(arraDate[2]));
        }
        console.log(fechaevento);
        return fechaevento.getTime();
    }
}