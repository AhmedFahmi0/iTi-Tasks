from django.urls import path
from .views import index, bookstore_list, bookstore_detail, bookstore_delete, bookstore_update

app_name = 'bookstore'


urlpatterns = [
    path('index', index, name='bookstore-index'),
    path('bookstore_list/', bookstore_list, name="bookstore-list"),
    path('bookstore_detail/<int:book_id>', bookstore_detail, name="bookstore-detail"),
    path('bookstore_delete/<int:book_id>', bookstore_delete, name="bookstore-delete"),
    path('bookstore_update/<int:book_id>', bookstore_update, name="bookstore-update")
]
