/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, forwardRef, Input, Optional } from '@angular/core';
import { Injectable } from '@angular/core';
import { CloukitComponentTheme, RegisteredTheme } from './theme.model';

@Injectable()
export class CloukitThemeService {

  private themes: RegisteredTheme[] = [];

  constructor() {
    console.log('CloukitThemeService SUPER');
  }

  registerComponentTheme(componentName: string, componentTheme: CloukitComponentTheme): void {
    this.themes.push(new RegisteredTheme(componentName, componentTheme));
  }

  getComponentTheme(componentName: string): CloukitComponentTheme {
    const theme = this.themes.filter(registeredTheme => registeredTheme.componentName === componentName);
    if (theme === undefined || theme === null ||
      theme[0] === undefined || theme[0] === null) {
      return null;
    }
    return theme[0].componentTheme;
  }

}
