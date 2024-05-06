import express = require('express');

import PermissionService from '@/services/PermissionService';
import NodegenRequest from '../../interfaces/NodegenRequest';

/**
 * Express middleware to control the http headers for caching only
 * @returns {Function}
 */
export default (permission: string) => {
  return async (req: NodegenRequest, res: express.Response, next: express.NextFunction) => {
    try {
      await PermissionService.middleware(req, res, next, permission);
    } catch (error) {
      next(error);
    }
  };
};
