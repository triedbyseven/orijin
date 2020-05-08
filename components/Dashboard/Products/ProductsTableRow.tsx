import FadeIn from '../../Ui/Animation/FadeIn';
import { Image } from '../../Ui/Image';
import { TableData } from '../../Ui/Table';

export interface ProductsTableRowProps {
  title: string;
  price: number;
  inventory: string;
}

const ProductsTableRow: React.SFC<ProductsTableRowProps> = ({ title, price, inventory }) => {
  return (
    <FadeIn isTableRow={true}>
      <TableData>
        <Image imageUrl="https://picsum.photos/50/50" />
      </TableData>
      <TableData>{title}</TableData>
      <TableData>${price.toFixed(2)}</TableData>
      <TableData>{inventory} in stock</TableData>
    </FadeIn>
  );
};

export default ProductsTableRow;
