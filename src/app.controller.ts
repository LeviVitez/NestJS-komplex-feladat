/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
}
