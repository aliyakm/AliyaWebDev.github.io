from django.urls import path, re_path

from main.views import hello, products_list, hours_heads, product_detail

urlpatterns = [
    path('hi/', hello),
    re_path(r'time/plus/(\d{1,2})', hours_heads),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
]