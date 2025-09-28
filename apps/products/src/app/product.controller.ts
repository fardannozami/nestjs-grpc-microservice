import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductsRequest, ProductsResponse, ProductsServiceController, ProductsServiceControllerMethods } from 'types/proto/products';

@Controller('product')
@ProductsServiceControllerMethods()
export class ProductController implements ProductsServiceController {
    getProducts(request: ProductsRequest): Promise<ProductsResponse> | Observable<ProductsResponse> | ProductsResponse {
        console.log("product controller on products service")
        return {
            productId: 1,
            name: 'laptop',
            price: 1000
        }
    }
}
