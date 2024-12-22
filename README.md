1- Proje dosyasını local'inize alın.

2- İlk olarak kafka-setup dizinine gidip "docker compose up" komutunu çalıştırın

3- Main-Service dizinine gidip "docker compose up" komutunu çalıştırın

4- Payment ve Invoice mikro-service'lerin bulunduğu dizinlerde ayrı ayrı "docker compose up" komutunu çalıştırın

5- Projenin backend kısmı bu şekilde çalışıyor olacaktır.

6- Frontend klasörünün içindeki simple-ecommerce dizinine gidin ve "npm run dev" komutunu çalıştırın

7- Projenin frontend kısmı da bu şekilde çalışıyor olacaktır. 

8- Tarayıcınınzda localhost:5173 adresine gidin

9- Sizi Login sayfası karşılayacaktır.

10- Doğal olarak henüz bir hesabınız olmadığı için önce kayıt olmanız gerekmektedir.

11- create an account linkiyle Register sayfasına yönlendirileceksiniz.

12- Bir hesap oluşturun. Hesap başarıyla oluşturulduğunda tekrar Login sayfasına yönlendirileceksiniz

13- Oluşturduğunuz hesapla giriş yapın.

14- Hesabım kısmında bilgilerinizi güncelleyebilirsiniz.

15- Sol taraftaki filter-bar aracılığıyla ürünleri filtreleyebilirsiniz.

16- Ürünleri sepete ekleyebilir, sepetten çıkarabilir ve sepettekiler için ödeme yaparak sipariş oluşturabilirsiniz.

17- Dilerseniz çıkış yap kısmından oturumunuzu sonlandırabilirsiniz.


Projenin ekran görüntüleri:

Login Sayfası:
![](./ScreenShots/Login.png)

Anasayfa: 
![](./ScreenShots/Home-Page.png)

Profil Sayfası:
![](./ScreenShots/Profile-Page.png)

Profil Sayfasında Düzenleme:
![](./ScreenShots/Edit-in-Profile.png)

Cinsiyete Göre Filtreleme:
![](./ScreenShots/Filter-by-Gender.png)

Kategoriye Göre Filtreleme:
![](./ScreenShots/Filter-by-Category.png)

Fiyata Göre Filtreleme:
![](./ScreenShots/Filter-by-Price.png)

Sepet Ekleme:
![](./ScreenShots/Add-To-Basket.png)

Sepet İşlemleri
![](./ScreenShots/Overview-in-Basket.png)

Ödeme:
![](./ScreenShots/Payment.png)

Redis Kullanımında Öncesi ve Sonrası(işlemin kaç ms sürdüğüne bakabilirsiniz):
![](./ScreenShots/Before-Redis-Cache.png)
![](./ScreenShots/After-Redis-Cache.png)

Docker Konteynırları:
![](./ScreenShots/Docker-Containers.png)

JWT kontrolü:
![](./ScreenShots/JWT-Control.png)
![](./ScreenShots/With-JWT-Token.png)

Ödeme sonrası payment ve invoice mikroservislerinin log'ları(ürün id'si ve adedi mesaj olarak gönderilmiştir.)
![](./ScreenShots/MicroService-Logs.png)

