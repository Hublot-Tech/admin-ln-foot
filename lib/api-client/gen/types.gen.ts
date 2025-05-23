// This file is auto-generated by @hey-api/openapi-ts

export type SizeDto = {
    id?: string;
    name?: string;
};

export type ReviewDto = {
    id?: string;
    productId: string;
    rating: number;
    comment: string;
};

export type PromotionProductDto = {
    id?: string;
    productVariantId: string;
    discountedPrice: number;
    startDate: string;
    endDate: string;
};

export type ProductDto = {
    id?: string;
    imageUrl?: string;
    file?: Blob | File;
    name?: string;
    description?: string;
    price: number;
    stockQuantity?: number;
    categoryNames?: Array<string>;
    sizes?: Array<string>;
};

export type ProductVariantDto = {
    id?: string;
    imageUrl?: string;
    file?: Blob | File;
    colorCode?: string;
    productId?: string;
    price?: number;
    stockQuantity?: number;
    sizes?: Array<string>;
};

export type OrderDto = {
    id?: string;
    orderDate?: string;
    status?: string;
    orderItems?: Array<OrderItemDto>;
};

export type OrderItemDto = {
    id?: string;
    productVariantId?: string;
    quantity?: number;
    size?: string;
    orderId?: string;
    price?: number;
};

export type Customer = {
    name?: string;
    email?: string;
    phone?: string;
};

export type PaymentResponseDto = {
    id?: string;
    orderId?: string;
    paymentId?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type CategoryDto = {
    id?: string;
    name?: string;
};

export type HeadingDto = {
    id?: string;
    title?: string;
    imageUrl?: string;
    file?: Blob | File;
};

export type DeleteSizeData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/sizes/{id}';
};

export type DeleteSizeResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteSizeResponse = DeleteSizeResponses[keyof DeleteSizeResponses];

export type GetSizeByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/sizes/{id}';
};

export type GetSizeByIdResponses = {
    /**
     * OK
     */
    200: SizeDto;
};

export type GetSizeByIdResponse = GetSizeByIdResponses[keyof GetSizeByIdResponses];

export type UpdateSizeData = {
    body: SizeDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/sizes/{id}';
};

export type UpdateSizeResponses = {
    /**
     * OK
     */
    200: SizeDto;
};

export type UpdateSizeResponse = UpdateSizeResponses[keyof UpdateSizeResponses];

export type DeleteReviewData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/reviews/{id}';
};

export type DeleteReviewResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteReviewResponse = DeleteReviewResponses[keyof DeleteReviewResponses];

export type GetReviewByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/reviews/{id}';
};

export type GetReviewByIdResponses = {
    /**
     * OK
     */
    200: ReviewDto;
};

export type GetReviewByIdResponse = GetReviewByIdResponses[keyof GetReviewByIdResponses];

export type UpdateReviewData = {
    body: ReviewDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/reviews/{id}';
};

export type UpdateReviewResponses = {
    /**
     * OK
     */
    200: ReviewDto;
};

export type UpdateReviewResponse = UpdateReviewResponses[keyof UpdateReviewResponses];

export type DeletePromotionProductData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/promotion-products/{id}';
};

export type DeletePromotionProductResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeletePromotionProductResponse = DeletePromotionProductResponses[keyof DeletePromotionProductResponses];

export type GetPromotionProductByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/promotion-products/{id}';
};

export type GetPromotionProductByIdResponses = {
    /**
     * OK
     */
    200: PromotionProductDto;
};

export type GetPromotionProductByIdResponse = GetPromotionProductByIdResponses[keyof GetPromotionProductByIdResponses];

export type UpdatePromotionProductData = {
    body: PromotionProductDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/promotion-products/{id}';
};

export type UpdatePromotionProductResponses = {
    /**
     * OK
     */
    200: PromotionProductDto;
};

export type UpdatePromotionProductResponse = UpdatePromotionProductResponses[keyof UpdatePromotionProductResponses];

export type DeleteProductData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/products/{id}';
};

export type DeleteProductResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteProductResponse = DeleteProductResponses[keyof DeleteProductResponses];

export type GetProductByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/products/{id}';
};

export type GetProductByIdResponses = {
    /**
     * OK
     */
    200: ProductDto;
};

export type GetProductByIdResponse = GetProductByIdResponses[keyof GetProductByIdResponses];

export type UpdateProductData = {
    body?: ProductDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/products/{id}';
};

export type UpdateProductResponses = {
    /**
     * OK
     */
    200: ProductDto;
};

export type UpdateProductResponse = UpdateProductResponses[keyof UpdateProductResponses];

export type DeleteProductVariantData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/product-variants/{id}';
};

export type DeleteProductVariantResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteProductVariantResponse = DeleteProductVariantResponses[keyof DeleteProductVariantResponses];

export type GetProductVariantData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/product-variants/{id}';
};

export type GetProductVariantResponses = {
    /**
     * OK
     */
    200: ProductVariantDto;
};

export type GetProductVariantResponse = GetProductVariantResponses[keyof GetProductVariantResponses];

export type UpdateProductVariantData = {
    body?: ProductVariantDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/product-variants/{id}';
};

export type UpdateProductVariantResponses = {
    /**
     * OK
     */
    200: ProductVariantDto;
};

export type UpdateProductVariantResponse = UpdateProductVariantResponses[keyof UpdateProductVariantResponses];

export type DeleteOrderData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/orders/{id}';
};

export type DeleteOrderResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteOrderResponse = DeleteOrderResponses[keyof DeleteOrderResponses];

export type GetOrderByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/orders/{id}';
};

export type GetOrderByIdResponses = {
    /**
     * OK
     */
    200: OrderDto;
};

export type GetOrderByIdResponse = GetOrderByIdResponses[keyof GetOrderByIdResponses];

export type UpdateOrderData = {
    body: OrderDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/orders/{id}';
};

export type UpdateOrderResponses = {
    /**
     * OK
     */
    200: OrderDto;
};

export type UpdateOrderResponse = UpdateOrderResponses[keyof UpdateOrderResponses];

export type ComfirmOrderData = {
    body: Customer;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/orders/{id}/confirm';
};

export type ComfirmOrderResponses = {
    /**
     * Accepted
     */
    202: PaymentResponseDto;
};

export type ComfirmOrderResponse = ComfirmOrderResponses[keyof ComfirmOrderResponses];

export type DeleteCategoryData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/categories/{id}';
};

export type DeleteCategoryResponses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteCategoryResponse = DeleteCategoryResponses[keyof DeleteCategoryResponses];

export type GetCategoryByIdData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/categories/{id}';
};

export type GetCategoryByIdResponses = {
    /**
     * OK
     */
    200: CategoryDto;
};

export type GetCategoryByIdResponse = GetCategoryByIdResponses[keyof GetCategoryByIdResponses];

export type UpdateCategoryData = {
    body: CategoryDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/categories/{id}';
};

export type UpdateCategoryResponses = {
    /**
     * OK
     */
    200: CategoryDto;
};

export type UpdateCategoryResponse = UpdateCategoryResponses[keyof UpdateCategoryResponses];

export type GetAllSizesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/sizes';
};

export type GetAllSizesResponses = {
    /**
     * OK
     */
    200: Array<SizeDto>;
};

export type GetAllSizesResponse = GetAllSizesResponses[keyof GetAllSizesResponses];

export type CreateSizeData = {
    body: SizeDto;
    path?: never;
    query?: never;
    url: '/api/sizes';
};

export type CreateSizeResponses = {
    /**
     * Created
     */
    201: SizeDto;
};

export type CreateSizeResponse = CreateSizeResponses[keyof CreateSizeResponses];

export type GetAllReviewsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/reviews';
};

export type GetAllReviewsResponses = {
    /**
     * OK
     */
    200: Array<ReviewDto>;
};

export type GetAllReviewsResponse = GetAllReviewsResponses[keyof GetAllReviewsResponses];

export type CreateReviewData = {
    body: ReviewDto;
    path?: never;
    query?: never;
    url: '/api/reviews';
};

export type CreateReviewResponses = {
    /**
     * Created
     */
    201: ReviewDto;
};

export type CreateReviewResponse = CreateReviewResponses[keyof CreateReviewResponses];

export type GetAllPromotionProductsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/promotion-products';
};

export type GetAllPromotionProductsResponses = {
    /**
     * OK
     */
    200: Array<PromotionProductDto>;
};

export type GetAllPromotionProductsResponse = GetAllPromotionProductsResponses[keyof GetAllPromotionProductsResponses];

export type CreatePromotionProductData = {
    body: PromotionProductDto;
    path?: never;
    query?: never;
    url: '/api/promotion-products';
};

export type CreatePromotionProductResponses = {
    /**
     * OK
     */
    200: PromotionProductDto;
};

export type CreatePromotionProductResponse = CreatePromotionProductResponses[keyof CreatePromotionProductResponses];

export type CreatePromotionProductsData = {
    body: Array<PromotionProductDto>;
    path?: never;
    query?: never;
    url: '/api/promotion-products/batch';
};

export type CreatePromotionProductsResponses = {
    /**
     * Created
     */
    201: Array<PromotionProductDto>;
};

export type CreatePromotionProductsResponse = CreatePromotionProductsResponses[keyof CreatePromotionProductsResponses];

export type GetAllProductsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/products';
};

export type GetAllProductsResponses = {
    /**
     * OK
     */
    200: Array<ProductDto>;
};

export type GetAllProductsResponse = GetAllProductsResponses[keyof GetAllProductsResponses];

export type CreateProductData = {
    body?: ProductDto;
    path?: never;
    query?: never;
    url: '/api/products';
};

export type CreateProductResponses = {
    /**
     * Created
     */
    201: ProductDto;
};

export type CreateProductResponse = CreateProductResponses[keyof CreateProductResponses];

export type GetProductVariantsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/product-variants';
};

export type GetProductVariantsResponses = {
    /**
     * OK
     */
    200: Array<ProductVariantDto>;
};

export type GetProductVariantsResponse = GetProductVariantsResponses[keyof GetProductVariantsResponses];

export type CreateProductVariantData = {
    body?: ProductVariantDto;
    path?: never;
    query?: never;
    url: '/api/product-variants';
};

export type CreateProductVariantResponses = {
    /**
     * Created
     */
    201: ProductVariantDto;
};

export type CreateProductVariantResponse = CreateProductVariantResponses[keyof CreateProductVariantResponses];

export type CreateProductVariantsData = {
    body?: Array<ProductVariantDto>;
    path?: never;
    query?: never;
    url: '/api/product-variants/bulk';
};

export type CreateProductVariantsResponses = {
    /**
     * Created
     */
    201: Array<ProductVariantDto>;
};

export type CreateProductVariantsResponse = CreateProductVariantsResponses[keyof CreateProductVariantsResponses];

export type GetAllOrdersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/orders';
};

export type GetAllOrdersResponses = {
    /**
     * OK
     */
    200: Array<OrderDto>;
};

export type GetAllOrdersResponse = GetAllOrdersResponses[keyof GetAllOrdersResponses];

export type CreateOrderData = {
    body: OrderDto;
    path?: never;
    query?: never;
    url: '/api/orders';
};

export type CreateOrderResponses = {
    /**
     * Created
     */
    201: OrderDto;
};

export type CreateOrderResponse = CreateOrderResponses[keyof CreateOrderResponses];

export type GetHeadingsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/headings';
};

export type GetHeadingsResponses = {
    /**
     * OK
     */
    200: Array<HeadingDto>;
};

export type GetHeadingsResponse = GetHeadingsResponses[keyof GetHeadingsResponses];

export type CreateHeadingData = {
    body: HeadingDto;
    path?: never;
    query?: never;
    url: '/api/headings';
};

export type CreateHeadingResponses = {
    /**
     * Created
     */
    201: HeadingDto;
};

export type CreateHeadingResponse = CreateHeadingResponses[keyof CreateHeadingResponses];

export type GetAllCategoriesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/categories';
};

export type GetAllCategoriesResponses = {
    /**
     * OK
     */
    200: Array<CategoryDto>;
};

export type GetAllCategoriesResponse = GetAllCategoriesResponses[keyof GetAllCategoriesResponses];

export type CreateCategoryData = {
    body: CategoryDto;
    path?: never;
    query?: never;
    url: '/api/categories';
};

export type CreateCategoryResponses = {
    /**
     * Created
     */
    201: CategoryDto;
};

export type CreateCategoryResponse = CreateCategoryResponses[keyof CreateCategoryResponses];

export type GetUserOrdersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/orders/user/orders';
};

export type GetUserOrdersResponses = {
    /**
     * OK
     */
    200: Array<OrderDto>;
};

export type GetUserOrdersResponse = GetUserOrdersResponses[keyof GetUserOrdersResponses];

export type DeleteProduct1Data = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/headings/{id}';
};

export type DeleteProduct1Responses = {
    /**
     * No Content
     */
    204: void;
};

export type DeleteProduct1Response = DeleteProduct1Responses[keyof DeleteProduct1Responses];

export type GetOrderById1Data = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/api/headings/{id}';
};

export type GetOrderById1Responses = {
    /**
     * OK
     */
    200: HeadingDto;
};

export type GetOrderById1Response = GetOrderById1Responses[keyof GetOrderById1Responses];

export type ClientOptions = {
    baseUrl: 'https://lnfoot-api.hublots.co' | (string & {});
};