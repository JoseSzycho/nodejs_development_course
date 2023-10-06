/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res.send('login');
};

const logout = (req: Request, res: Response) => {
  res.send('logout');
};

const refreshToken = (req: Request, res: Response) => {
  res.send('refresh token');
};

export { login, logout, refreshToken };
