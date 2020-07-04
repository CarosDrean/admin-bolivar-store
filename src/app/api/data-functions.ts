import { Functions } from './graphql/functions';

export class DataFunctions {

  public static Users = new Functions ('user', 'users', 'usersRole', '', 'createUser', 'updateUser', 'deleteUser');
  public static UserFields = ['_id', 'name', 'lastName', 'email', 'password', 'role'];

  public static Product = new Functions ('product', 'products', '', '', 'createProduct', 'updateProduct', 'deleteProduct');
  public static ProductFields = ['_id',
              'name', 'price', 'description', 'state', 'category{_id, name}', 'visit', 'sale', 'imgUrl', 'imgRef'];

  public static Category = new Functions ('category', 'categorys', '', '', 'createCategory', 'updateCategory', 'deleteCategory');
  public static CategoryFields = ['_id', 'name'];

}
