import { Observable } from 'rxjs/Observable';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UnitService } from "../../services/unit.service";
import { Case } from "../../models/Case";

@Component({
  selector: "app-cdetail",
  templateUrl: "./cdetail.component.html",
  styleUrls: ["./cdetail.component.css"]
})
export class CdetailComponent implements OnInit {
  id: string;
  thecase: Observable<Case>;
  ready: boolean = false;
  private caseDoc: AngularFirestoreDocument<Case>;

  constructor(
    private route: ActivatedRoute,
    private unitService: UnitService,
    private afs: AngularFirestore
  ) {
    this.route.paramMap.subscribe(id => {
      this.id = id.get("id");
      this.caseDoc = afs.doc<Case>(`cases/${this.id}`);
      setTimeout(() => {
        this.ready=true;
      this.thecase = this.caseDoc.valueChanges();
      }, 100);
    });
  }

  ngOnInit() {}
}
