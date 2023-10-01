# Generated by Django 4.2.5 on 2023-09-27 10:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('countInStock', models.IntegerField()),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
