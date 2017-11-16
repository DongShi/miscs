//
//  ViewController.swift
//  Checklists
//
//  Created by stone on 12/11/2017.
//  Copyright © 2017 stone. All rights reserved.
//

import UIKit


class ChecklistViewController: UITableViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableview: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 100
    }
    
    override func tableView(_ tableview: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableview.dequeueReusableCell(withIdentifier: "ChecklistItem", for: indexPath)
        let label = cell.viewWithTag(1000) as! UILabel
        switch indexPath.row % 5 {
        case 0:
            label.text = "Read Books"
            break
        case 1:
            label.text = "Programming"
            break
        case 2 :
            label.text = "Write Articles"
            break
        case 3:
            label.text = "Take a rest"
            break
        case 4:
            label.text = "Watch TV"
            break
        default:
            label.text = "Take a rest"
        }
        return cell
    }
}

