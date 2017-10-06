import { Router } from 'express';
import Bar from '../model/bar';

export default() => {
 let api = Router();

  //home/bar/add

  api.post('/add', (req, res) => {
    let newBar = new Bar();
    newBar.name = req.body.name;

    newBar.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bar is successfully added'});
    });
  });

  //home/bar/:id

  api.get('/', (req,res) => {
    Bar.find({}, (err, bars) => {
      if (err) {
        res.send(err);
      }
      res.json(bars);
    });
  });

  //home/bar/:id

  api.get('/:id', (req, res) => {
    Bar.findById(req.params.id, (err, bar) => {
      if (err) {
        res.send(err);
      }
      res.json(bar);
    });
  });

  api.put('/:id', (req, res) => {
    Bar.findById(req.params.id, (err, bar) => {
      if (err) {
        res.send(err);
      }
      Object.assign(bar, req.body).save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({message: "Bar infos updated successfully"})
      });
    });
  });

  api.delete('/:id', (req, res) => {
    Bar.findByIdAndRemove(
      req.params.id,
     (err, bar) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "Bar removes successfully"});
    });
  });
  return api
};
