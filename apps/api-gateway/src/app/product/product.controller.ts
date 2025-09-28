import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  PRODUCTS_PACKAGE_NAME,
  PRODUCTS_SERVICE_NAME,
  ProductsServiceClient,
} from 'types/proto/products';

@Controller('product')
export class ProductController implements OnModuleInit {
    private productService: ProductsServiceClient
    constructor(@Inject(PRODUCTS_PACKAGE_NAME) private client: ClientGrpc) {}

    onModuleInit() {
        this.productService = this.client.getService<ProductsServiceClient>(PRODUCTS_SERVICE_NAME);
    }

    @Get()
    async getProducts() {
        console.log("product controller on api gateway")
        return this.productService.getProducts({productId: 1});
    }
}
