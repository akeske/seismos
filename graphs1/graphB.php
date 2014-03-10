<?php // content="text/plain; charset=utf-8"

include('dataGraphB.php');

require_once ('../jpgraph/jpgraph.php');
require_once ('../jpgraph/jpgraph_line.php');

$datax1 = $_SESSION['year1'];
$datay1 = $_SESSION['b1'];

$a = $_GET['k1']+1;
// Setup the graph
$graph = new Graph(900,300);
$graph->SetScale("textlin");
$graph->SetShadow();
$graph->img->SetAntiAliasing(false);
$graph->title->Set('b value - Area '.$a);
$graph->subtitle->Set('');
$graph->xaxis->title->Set('Year');
$graph->yaxis->title->Set('b value');
$graph->SetBox(false);
$graph->img->SetAntiAliasing();
$graph->yaxis->HideZeroLabel();
$graph->yaxis->HideLine(false);
$graph->yaxis->HideTicks(false,false);
$graph->xgrid->Show();
$graph->xgrid->SetLineStyle("solid");
$graph->xaxis->SetTickLabels( $datax1 );
$graph->xgrid->SetColor('#E3E3E3');
$graph->legend->SetFrameWeight(1);
$graph->img->SetMargin(40,30,20,40);
$graph->SetMargin(40,20,20,40);
$graph->title->SetFont(FF_FONT1,FS_BOLD);
$graph->yaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->title->SetFont(FF_FONT1,FS_BOLD);
$graph->xaxis->SetTextLabelInterval(1);
$graph->xaxis->SetLabelAngle(30);
// Create the first line
$p1 = new LinePlot($datay1);
$graph->Add($p1);
$p1->value->SetFormat('%.4f');
$p1->value->Show();
$p1->mark->SetType(MARK_FILLEDCIRCLE,'',0.5);
$p1->mark->SetColor('#55bbdd');
$p1->SetColor("#6495ED");
$p1->SetCenter();
$p1->SetFillColor('orange@0.7');


// Output line
$graph->Stroke();

?>