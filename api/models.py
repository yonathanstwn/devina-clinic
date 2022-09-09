from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=30)
    selling_price = models.PositiveIntegerField()
    raw_price = models.PositiveIntegerField()
    quantity = models.PositiveSmallIntegerField()
    fraction_numerator = models.PositiveSmallIntegerField()
    fraction_denominator = models.PositiveSmallIntegerField()


class ProductTransaction(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    discount = models.PositiveSmallIntegerField()
    quantity = models.PositiveSmallIntegerField()


class TreatmentPackageType(models.Model):
    name = models.CharField(max_length=30)
    price = models.PositiveIntegerField()


class TreatmentType(models.Model):
    name = models.CharField(max_length=30)
    price = models.PositiveIntegerField()
    packages = models.ManyToManyField(
        TreatmentPackageType, related_name='treatments')
    products = models.ManyToManyField(Product, related_name='treatments')


class TreatmentPackage(models.Model):
    type = models.ForeignKey(TreatmentPackageType, on_delete=models.CASCADE)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    discount = models.PositiveSmallIntegerField()
    date = models.DateTimeField()


class Treatment(models.Model):
    type = models.ForeignKey(TreatmentType, on_delete=models.CASCADE)
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField()
    discount = models.PositiveSmallIntegerField()
    package = models.ForeignKey(TreatmentPackage, on_delete=models.CASCADE)
