import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface Payload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token Missing');
  }

  // Dividir /Separar, a palavra Barrer do token, e pegarmos o token
  const [, token] = authHeader.split(' ');

  // Verificar se o Token é um Jsonwebtoken válido
  try {
    const { sub: user_id } = verify(
      token,
      '770887ba56195ba5c3728f9e9471de61',
    ) as Payload;

    // Verificar se o token pertence a um úsuario válido
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('This user does not exists');
    }

    next();
  } catch (err) {
    throw new Error('Token Invalid');
  }
}
