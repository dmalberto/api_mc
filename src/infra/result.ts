type DataType = {
  titulo: string;
  chapeu: string;
  texto: string;
  autor: string;
  imagem: string;
  dataPublicacao: Date;
  tags: string;
  link: string;
  ativo: boolean;
};

export class Result {
  Qtd: number;
  Page: number;
  Total: number;
  Data: DataType;
}
