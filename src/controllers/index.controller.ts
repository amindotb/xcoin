import { Request, Response } from "express";

export default {
  async index(req: Request, res: Response): Promise<Response> {
    return res.send(`                                                                                                                                              
    ──▄▄█▀▀▀▀▀█▄▄──
    ▄█▀░░▄░▄░░░░▀█▄
    █░░░▀█▀▀▀▀▄░░░█
    █░░░░█▄▄▄▄▀░░░█
    █░░░░█░░░░█░░░█
    ▀█▄░▀▀█▀█▀░░▄█▀
    ──▀▀█▄▄▄▄▄█▀▀──
    XCOIN API gateway
    `);
  },

  async ping(req: Request, res: Response): Promise<Response > {
    return res.onSuccess({
      ping: 'pong',
    });
  },

}