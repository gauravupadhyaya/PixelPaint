import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class PixelPaint {
    private map:string[][]=[];
    private totalRows = 0;
    private totalColumn = 0;

    fill(col:number,row:number, color:string) : void {
        if(!this.map[row]){
          this.map[row] =[]
        }
        this.map[row][col] = color;
        if (row > this.totalRows){
            this.totalRows = row;
        }
        if(col > this.totalColumn){
            this.totalColumn = col;
        }
    }

    fillRow(row:number, colFrom:number, colTo:number, color: string) : void {
        for (let i = colFrom; i <= colTo ; i++) {
            this.fill(i, row, color)
        }
    }

    fillCol(col:number, rowFrom:number, rowTo:number, color:string) : void {
        for (let i = rowFrom; i <= rowTo; i++) {
            this.fill(col, i, color);
        }
    }

    getColorAt(col:number,row:number) : string{
        if(this.map && this.map[row] && this.map[row][col]){
            return this.map[row][col];
        }
        return "White";
    }
    generateCanvas() : string[][] {
        const printRows = [];
        for (let i = 1; i <= this.totalRows; i++) {
            const printColumns = []
            for (let j = 1; j <= this.totalColumn; j++) {
                printColumns.push(this.getColorAt(j,i));
            }
            printRows.push(printColumns);
        }
        return printRows;
    }
    flood(col:number, row:number, color:string) : void{
      const oldColor = this.getColorAt(col, row);
      this.floodRecursive(col, row, oldColor, color);
    }

  private floodRecursive(col:number, row:number, oldColor:string, newColor:string){
      if(row > 1 && col >1 && row <= this.totalRows && col <= this.totalColumn && this.getColorAt(col, row) != oldColor){
        return;
      }
      this.fill(col, row, newColor);
      this.floodRecursive(col+1, row, oldColor, newColor);
      this.floodRecursive(col-1, row, oldColor, newColor);
      this.floodRecursive(col, row+1, oldColor, newColor);
      this.floodRecursive(col, row-1, oldColor, newColor);
    }
}

